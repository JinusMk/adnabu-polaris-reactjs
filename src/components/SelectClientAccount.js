import React, {useCallback, useState} from 'react'
import { Autocomplete, Icon } from '@shopify/polaris'
import { SearchMinor } from '@shopify/polaris-icons'

export default function SelectClientAccount(props) {
    const deselectedOptions = [
      {value: 'value 1', label: 'Test Account 1'},
      {value: 'value 2', label: 'Test Account 2'},
      {value: 'valu 3', label: 'Test Account 3'},
      {value: 'value 4', label: 'Test Account 4'},
      {value: 'value 5', label: 'Test Account 5'},
    ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(deselectedOptions);
  
    const updateText = useCallback(
        (value) => {
          setInputValue(value);
    
          if (!loading) {
            setLoading(true);
          }
    
          setTimeout(() => {
            if (value === '') {
              setOptions(deselectedOptions);
              setLoading(true);
              return;
            }
            const filterRegex = new RegExp(value, 'i');
            const resultOptions = options.filter((option) =>
              option.label.match(filterRegex),
            );
            setOptions(resultOptions);
            setLoading(false);
          }, 300);
        },
        [deselectedOptions],
      );
      const updateSelection = useCallback((selected) => {
        const selectedText = selected.map((selectedItem) => {
          const matchedOption = options.find((option) => {
            return option.value.match(selectedItem);
          });
          return matchedOption && matchedOption.label;
        });
        setSelectedOptions(selected);
        setInputValue(selectedText);
      }, []);
    
      const textField = (
        <Autocomplete.TextField
          onChange={updateText}
          label={props.label ? "Select your account" : ""}
          value={inputValue}
          prefix={<Icon source={SearchMinor} color="inkLighter" />}
          placeholder="Search"
        />
      );
      return (
          <Autocomplete
            options={options}
            selected={selectedOptions}
            onSelect={updateSelection}
            loading={loading}
            textField={textField}
          />
      );
    }