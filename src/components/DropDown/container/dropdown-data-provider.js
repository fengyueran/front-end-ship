import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    multiSelect: PropTypes.bool,
    selectedItems: PropTypes.array,
    onClick: PropTypes.func
  };

  const Container = ({
    name,
    items,
    multiSelect = false,
    selectedItems,
    onClick
  }) => {
    const [_selectedItems, setSelectedItems] = useState([]);
    const onSelect = e => {
      let tmpSelected = [..._selectedItems];
      const selectedIndex = +e.target.getAttribute('data-index');
      const foundIndex = _selectedItems.findIndex(
        index => index === selectedIndex
      );
      if (foundIndex >= 0) {
        tmpSelected.splice(foundIndex, 1);
      } else if (multiSelect) {
        tmpSelected.push(items[selectedIndex]);
      } else {
        tmpSelected = [items[selectedIndex]];
      }
      setSelectedItems(tmpSelected);
      if (onClick) {
        onClick({ name, item: items[selectedIndex], multiSelect });
      }
    };

    return (
      <WrappedComponent
        name={name}
        items={items}
        onSelect={onSelect}
        selectedItems={selectedItems || _selectedItems}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
