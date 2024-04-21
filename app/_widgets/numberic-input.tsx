import { Input } from "antd";

interface NumericInputProps {
  style?: React.CSSProperties;
  value: string;
  min?: number;
  max?: number;
  size?: 'large' | 'middle' | 'small';
  onChange: (value: string) => void;
}

export const NumericInput = (props: NumericInputProps) => {
  const { value, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  const increaseValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    let value = (e.target as HTMLInputElement).value;

    if (key === "ArrowUp" && ((props.max && +value < props.max) || !props.max)) {
      value = (+value + 1).toString()
    } else if (key === "ArrowDown" && ((props.min && +value > props.min) || !props.min)) {
      value = (+value - 1).toString()
    }
    onChange(value);
    // const { value: inputValue } = e.target;
    // const reg = /^-?\d*(\.\d*)?$/;
    // if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
    //   onChange(inputValue);
    // }
    // return ""
    // onChange(inputValue);
  }

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={increaseValue}
    />
  );
};
