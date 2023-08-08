export enum ContentCreationLimits {
    FILE_STORAGE_ADAGIO = 10737418240, //10 GB in bytes
    FILE_STORAGE_MODERATO = 80530636800, //75 GB in bytes
    FILE_STORAGE_VIVACE = 161061273600, //150 GB in bytes
    RELEASE_ADAGIO = 50,
    RELEASE_MODERATO = 500,
    RELEASE_VIVACE = 5000,
    ARTIST_ADAGIO = 50,
    ARTIST_MODERATO = 500,
    ARTIST_VIVACE = 5000,
    BLOG_ADAGIO = 50,
    BLOG_MODERATO = 500,
    BLOG_VIVACE = 5000,
    APPAREL_ADAGIO = 50,
    APPAREL_MODERATO = 500,
    APPAREL_VIVACE = 5000,
    APPAREL_ORDER_ADAGIO = 50,
    APPAREL_ORDER_MODERATO = 500,
    APPAREL_ORDER_VIVACE = 5000,
    STAFF_ADAGIO = 5,
    STAFF_MODERATO = 25,
    STAFF_VIVACE = 100,
    EMAIL_ADAGIO = 100,
    EMAIL_MODERATO = 500,
    EMAIL_VIVACE = 1500
}

export const GetCustomDropdownStyle = (size: string, showIcon?: boolean) => {
   return {
       control: (provided: any, state: { isFocused: any; }) => ({
           ...provided,
           borderRadius: '0.5rem',
           minHeight: size === 'small' ? '1.5rem' : size === 'large' ? '2.5rem' : '2rem',
           fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.125rem' : '0.875rem',
           borderColor: state.isFocused ? "#0C192C" : "rgba(12, 25, 44, 0.5)",
           boxShadow: state.isFocused ? '0 0 0 2px rgba(51, 153, 255, 0.2)' : provided.boxShadow,
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