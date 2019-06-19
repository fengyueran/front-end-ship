import React, { useState, useRef, useEffect } from 'react';
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
    const [isShowMenus, setIsShowMenus] = useState(false);
    const dropDownRef = useRef();

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

    const onDropDown = () => {
      if (!isShowMenus) {
        setIsShowMenus(true);
      }
    };

    useEffect(() => {
      const hiddleClickOutside = e => {
        if (isShowMenus) {
          const isClickOutside = !dropDownRef.current.contains(e.target);
          if (isClickOutside) {
            setIsShowMenus(false);
          }
        }
      };
      document.addEventListener('click', hiddleClickOutside);
      document.addEventListener('touchstart', hiddleClickOutside); // for mobile phone
      return () => {
        document.removeEventListener('click', hiddleClickOutside);
        document.removeEventListener('touchstart', hiddleClickOutside);
      };
    }, [isShowMenus]);

    return (
      <WrappedComponent
        name={name}
        items={items}
        isShowMenus={isShowMenus}
        onSelect={onSelect}
        onDropDown={onDropDown}
        dropDownRef={dropDownRef}
        selectedItems={selectedItems || _selectedItems}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
