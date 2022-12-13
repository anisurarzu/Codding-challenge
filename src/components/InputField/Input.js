import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";
import { PickList } from "primereact/picklist";
import { RadioButton } from "primereact/radiobutton";
import { useEffect } from "react";
import { MdOutlineFilePresent, MdOutlineGTranslate } from "react-icons/md";
import { toast } from "react-toastify";

export const InputField = ({
  id,
  type,
  name,
  label,
  labelFor,
  required,
  errors,
  defaultValue,
  disabled = false,
  register,
  width,
  height,
  value,
  optionLabel,
  autoFilteredValue,
  autoCompleteMethod,
  selectedAutoValue,
  setSelectedAutoValue,
  className,
  checked,
  onChange,
  translateHandler,
  setSwitchChecked,
  switchChecked,
  onBlur,
  imagePreview,
  setImagePreview,
  onSelect,
  onClick,
  inputGroup,
  inputGroupIcon,
  switchClassName,
  picklistSourceValue,
  picklistTargetValue,
  setPicklistSourceValue,
  setPicklistTargetValue,
  sourceHeader,
  targetHeader,
  fileUploadPadding,
  autoCompleteFieldName,
  maxFractionDigits,
  minFractionDigits,
  prefix,
  suffix,
  mode,
  min,
  filePreview,
  radioBtnmap,
  selectionMode,
  minDate,
  maxDate,
  maxlength,
  onClose,
  accept,
  ...rest
}) => {
  useEffect(() => {
    if (errors) {
      toast.error(errors, {
        onClose,
      });
    }
  }, [errors]);

  return (
    <>
      <span className="p-float-label">
        {!inputGroup && type === "text" && (
          <>
            <InputText
              id={id}
              name={name}
              className={`rounded-md ${
                required && !value?.length && "border-red-500"
              } w-${width} ${className}`}
              disabled={disabled}
              value={value == null ? "" : value}
              onChange={onChange}
              required={required}
              onBlur={onBlur}
              onClick={onClick}
            />
            <label className="text-[#A2B3C4]" htmlFor={labelFor}>
              {label}
            </label>
          </>
        )}

        {type === "select" && (
          <>
            <AutoComplete
              dropdown
              suggestions={autoFilteredValue}
              completeMethod={autoCompleteMethod}
              field={autoCompleteFieldName || "label"}
              id={id}
              name={name}
              className={`rounded-md w-${width} ${
                required &&
                !value?.length &&
                !value?.label?.length &&
                "autoComplete-red"
              }`}
              disabled={disabled}
              value={value == null ? "" : value}
              onChange={onChange}
              onBlur={onBlur}
              autoHighlight
              onSelect={onSelect}
              onClick={onClick}
              defaultValue={defaultValue}
              dropdownAutoFocus
              required={required} // not working
              size={10}
              forceSelection
            />
            <label htmlFor={labelFor}>{label}</label>
          </>
        )}

        {inputGroup && type === "text" && (
          <div className="col-12 md:col-4 rounded-md">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className={inputGroupIcon}></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id={id}
                  name={name}
                  className={`rounded-md ${
                    required && !value?.length && "border-red-500"
                  } w-${width} `}
                  disabled={disabled}
                  value={value == null ? "" : value}
                  onChange={onChange}
                  required={required}
                  onBlur={onBlur}
                  onClick={onClick}
                />
                <label className="text-[#A2B3C4]" htmlFor={labelFor}>
                  {label}
                </label>
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
