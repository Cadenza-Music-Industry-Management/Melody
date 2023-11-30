export const GetCustomDropdownStyle = (size: string, showIcon?: boolean) => {
   return {
       control: (provided: any, state: { isFocused: any; }) => ({
           ...provided,
           borderRadius: '0.5rem',
           minHeight: size === 'small' ? '1.5rem' : size === 'large' ? '2.9rem' : '2rem',
           fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.125rem' : '0.875rem',
           borderColor: state.isFocused ? "#0C192C" : "rgb(209 213 219)",
           borderWidth: state.isFocused ?  2 : 1,
           boxShadow: "rgba(12, 25, 44, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
           '&:hover': {
               borderColor: '#0C192C',
           },
           paddingRight: showIcon ? 15 : "auto",
           cursor: "pointer"
       }),
       menu: (styles: any) => ({
           ...styles,
           fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.125rem' : '0.875rem',
           borderRadius: size === 'small' ? '0.125rem' : size === 'large' ? '0.375rem' : '0.25rem',
       }),
       option: (provided: any, state: { isFocused: boolean, isSelected: boolean }) => ({
           ...provided,
           cursor: "pointer",
           color: state.isFocused || state.isSelected ? "white" : "black",
           background: state.isFocused ? 'rgba(12, 25, 44, 0.7)' : state.isSelected ? 'rgba(12, 25, 44, 1)' : undefined,
           '&:hover': {
               backgroundColor: '#0C192C',
           },
       }),
       dropdownIndicator: (styles: any) => ({
           ...styles,
           padding: size === 'small' ? 2 : size === 'large' ? 8 : 4,
       }),
       multiValue: (provided: any) => ({
           ...provided,
           backgroundColor: '#0C192C',
       }),
       multiValueLabel: (provided: any) => ({
           ...provided,
           color: '#FFFFFF',
       }),
       multiValueRemove: (provided: any) => ({
           ...provided,
           color: "#FFFFFF",
           ':hover': {
               backgroundColor: '#CBD5E0',
               color: '#4A5568',
           },
       })
   }
}