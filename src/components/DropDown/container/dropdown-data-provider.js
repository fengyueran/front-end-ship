import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    multiSelect: PropTypes.bool,
    onClick: PropTypes.func
  };

  const Container = ({ name, items, multiSelect = false, onClick }) => {
    const [selectedItems, setSelectedItems] = useState({});
    const onSelect = e => {
      const selectedIndex = e.target.getAttribute('data-index');
      const selectedItem = selectedItems[selectedIndex];
      selectedItems[selectedIndex] = !selectedItem;
      const newItems = multiSelect
        ? { ...selectedItems }
        : { [selectedIndex]: !selectedItem };
      setSelectedItems(newItems);
      if (onClick) {
        onClick({ name, item: items[selectedIndex], multiSelect });
      }
    };

    return (
      <WrappedComponent
        name={name}
        items={items}
        onSelect={onSelect}
        selectedItems={selectedItems}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
