import { useState } from 'react';

function useResizeBarStatus(onMouseDown) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseUp = () => {
    setIsMouseDown(false);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const handleMouseDown = e => {
    setIsMouseDown(true);
    onMouseDown(e);
    document.addEventListener('mouseup', onMouseUp);
  };

  return { isMouseDown, handleMouseDown };
}

export default useResizeBarStatus;
