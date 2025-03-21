import { useState, useEffect } from "react";
import { useGameConstants } from "@context/gameConstants.context";
import { useAuth } from "@context/auth.context";
import { kyInstance } from "@utils/api/ky-config";
import toast from "react-hot-toast";
import { Button } from "@shared/ui/button";

// Liste des devises autorisées à être modifiées
const ALLOWED_CURRENCIES = ["$BFT", "Sponsor Marks"];

export default function AdminUpdateCurrencies() {
  const { user } = useAuth();
  const { fetchCurrencyRates } = useGameConstants();
  const [isEditMode, setIsEditMode] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [currencyValues, setCurrencyValues] = useState({});
  const [items, setItems] = useState([]);
  const [itemValues, setItemValues] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  // Récupérer la liste des devises au chargement du composant
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await kyInstance.get('v1/admin/currencies').json();
        // Filtrer uniquement les devises autorisées
        const allowedCurrencies = response.filter(currency => 
          ALLOWED_CURRENCIES.includes(currency.name)
        );
        setCurrencies(allowedCurrencies);
        
        // Initialiser les valeurs des devises autorisées
        const initialValues = {};
        allowedCurrencies.forEach(currency => {
          initialValues[currency.id] = currency.price;
        });
        setCurrencyValues(initialValues);
      } catch (error) {
        const errorMessage = error.responseData?.error || 'Failed to update currencies. Please try again.';
        toast.error(errorMessage);
      }
    };

    const fetchItems = async () => {
      try {
        const response = await kyInstance.get('v1/admin/items').json();
        setItems(response);

        const initialValues = {};
        response.forEach(item => {
          initialValues[item.id] = item.floorPrice;
        });
        setItemValues(initialValues);
      } catch (error) {
        const errorMessage = error.responseData?.error || 'Failed to update badges floor price. Please try again.';
        toast.error(errorMessage);
      }
    };

    if (user && user.is_admin === true) {
      fetchCurrencies();
      fetchItems();
    }
  }, [user]);

  if (!user || user.is_admin !== true) return null;

  const handleUpdateClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    
    // Réinitialiser les valeurs aux valeurs actuelles
    const resetValues = {};
    currencies.forEach(currency => {
      resetValues[currency.id] = currency.price;
    });
    setCurrencyValues(resetValues);
  };

  const handleValueChange = (currencyId, value) => {
    setCurrencyValues(prev => ({
      ...prev,
      [currencyId]: value
    }));
  };

  const handleItemValueChange = (itemId, value) => {
    setItemValues(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  const handleSaveChanges = async () => {
    try {
      setIsUpdating(true);
      
      // Vérifier que toutes les valeurs sont valides
      const invalidValues = [];
      for (const currency of currencies) {
        const newValue = parseFloat(currencyValues[currency.id]);
        if (isNaN(newValue) || newValue <= 0) {
          invalidValues.push(currency.name);
        }
      }

      // Vérifier également les valeurs des badges
      for (const item of items) {
        const newValue = parseFloat(itemValues[item.id]);
        if (isNaN(newValue) || newValue <= 0) {
          invalidValues.push(item.name);
        }
      }
      
      if (invalidValues.length > 0) {
        toast.error(`Invalid values for: ${invalidValues.join(', ')}. All values must be greater than zero.`);
        return;
      }
      
      // Mettre à jour chaque devise autorisée
      for (const currency of currencies) {
        const newValue = parseFloat(currencyValues[currency.id]);
        
        if (newValue !== currency.price) {
          await kyInstance.patch(`v1/admin/currencies/${currency.id}`, {
            json: {
              currency: {
                price: newValue
              }
            }
          });
        }
      }

      for (const item of items) {
        const newValue = parseFloat(itemValues[item.id]);
        
        if (newValue !== item.floorPrice) {
          await kyInstance.patch(`v1/admin/items/${item.id}`, {
            json: {
              item: {
                floorPrice: newValue
              }
            }
          });
        }
      }
      
      // Récupérer les nouvelles valeurs
      if (fetchCurrencyRates) {
        await fetchCurrencyRates();
      }
      
      // Rafraîchir la liste des devises autorisées
      const updatedCurrencies = await kyInstance.get('v1/admin/currencies').json();
      const updatedAllowedCurrencies = updatedCurrencies.filter(currency => 
        ALLOWED_CURRENCIES.includes(currency.name)
      );
      setCurrencies(updatedAllowedCurrencies);
      
      // Mettre à jour les valeurs affichées
      const updatedValues = {};
      updatedAllowedCurrencies.forEach(currency => {
        updatedValues[currency.id] = currency.price;
      });
      setCurrencyValues(updatedValues);

      // Rafraîchir la liste des badges
      const updatedItems = await kyInstance.get('v1/admin/items').json();
      setItems(updatedItems);
      
      // Mettre à jour les valeurs des badges affichées
      const updatedItemValues = {};
      updatedItems.forEach(item => {
        updatedItemValues[item.id] = item.floorPrice;
      });
      setItemValues(updatedItemValues);
      
      setIsEditMode(false);
      
      toast.success('Values updated successfully!');
    } catch (error) {
      const errorMessage = error.message || error.responseData?.error || 'Failed to update values. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsUpdating(false);
    }
    window.location.reload();
  };

  return (
    <div className="ml-4 relative">
      <Button
        onClick={handleUpdateClick}
      >
        Currencies
      </Button>
      
      {isEditMode && (
        <div 
          className="absolute top-full left-0 mt-2 z-50 bg-gray-800 p-4 rounded-md border border-gray-700 w-64 shadow-lg"
        >
          <h3 className="text-white text-sm font-medium mb-3 uper">Update Currency Rates</h3>
          
          <div className="max-h-80 overflow-y-auto">
            {currencies.map(currency => (
              <div key={currency.id} className="mb-3">
                <label className="block text-gray-300 text-xs mb-1">
                  {currency.name} Rate ($)
                </label>
                <input
                  type="number"
                  step="0.0001"
                  value={currencyValues[currency.id] || ''}
                  onChange={(e) => handleValueChange(currency.id, e.target.value)}
                  className="w-full px-2 py-1 text-sm bg-gray-700 text-white border border-gray-600 rounded"
                />
              </div>
            ))}
          </div>

          <h3 className="text-white text-sm font-medium mb-3 uper">Update Badges and contracts Floor Price</h3>

          <div className="max-h-80 overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="mb-3">
                <label className="block text-gray-300 text-xs mb-1">
                  {item.name} Floor Price ($)
                </label>
                <input
                  type="number"
                  step="0.0001"
                  value={itemValues[item.id] || ''}
                  onChange={(e) => handleItemValueChange(item.id, e.target.value)}
                  className="w-full px-2 py-1 text-sm bg-gray-700 text-white border border-gray-600 rounded"
                />
              </div>
            ))}
          </div>
          
          
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSaveChanges}
              disabled={isUpdating}
              className="px-3 py-1 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
            >
              {isUpdating ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleCancelEdit}
              disabled={isUpdating}
              className="px-3 py-1 text-xs font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-md transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}