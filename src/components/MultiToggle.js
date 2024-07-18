import React, { useState, useRef, useEffect} from 'react';
import './MultiToggle.css';

const MultiToggle = ({options, selected, onSelect, width, height, style}) => {
	const parentRef = useRef();
  const optionsCount = options.length;

  const [selectedIndex, setSelectedIndex] = useState(selected||Math.floor(optionsCount/2));
  const [optionText, setOptionText] = useState("");

  const [parentWidth, setParentWidth] = useState(width || 300);
  const [parentHeight, setParentHeight] = useState(height || 50);
  const [sliderWidth, setSliderWidth] = useState(width / optionsCount);

  const [_sliderStyle, setSliderStyle] = useState(
    {
      width: `${sliderWidth}px`,
      outerHeight: `${parentHeight-6}px`,
      transform: `translateX(${selectedIndex * 100}%)`
    }
  );
  
	const _handleSelectOption = (option, index) => {
    setSelectedIndex(index)
  };

  useEffect(() => {
    setOptionText(options[selectedIndex].text);
    if(onSelect) onSelect(options[selectedIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    setSliderStyle({
      width: `${sliderWidth-1}px`,
      height: `${parentHeight-4}px`,
      transform: `translateX(${(-Math.floor(optionsCount/2) + selectedIndex ) * 100}%)`
    });
  }, [selectedIndex, sliderWidth]);

  useEffect(() => {
    setParentWidth(parentRef.current.offsetWidth);
    setSliderWidth(parentWidth / optionsCount);
    setParentHeight(parentRef.current.offsetHeight);
    
  }, [parentRef]);
  
	return (
  <div className="multi-toggle" ref={parentRef} style={{ 
    ...style, 
    width: `${parentWidth}px`, 
    height: `${parentHeight}px`,
    minWidth: `${parentWidth}px`,
    }}>
    {options.map((option, index) => (
        <button
          key={option.text}
          onClick={() => _handleSelectOption(option, index)}
          className="multi-toggle-button"
        >
          {option.text}
        </button>
      ))
    }
    <div className="multi-toggle-slider" style={_sliderStyle}>
      {optionText}
    </div>
  </div>
  );
}

export default MultiToggle;