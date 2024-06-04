
interface InputProps {
    name: string;
    id: string;
    showLabel?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: string;
  }
  const RadioInput: React.FC<InputProps> = ({ name, id, showLabel, onChange, checked, value }) => {
    return (
      <>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          id={id}
          style={{ display: "none" }}
        />
        <label htmlFor={id} className="radio-label flex flex-row-reverse md:grid md:grid-cols-1 justify-items-start md:justify-items-center gap-2" >
        <span
                    className={`${
                      showLabel ? "flex md:hidden" : "flex"
                    }`}
                  >
                    {value}
          </span>
          <div className="size-6 rounded-full border-[1px] border-primary flex-shrink-0">
            <svg className="svg" viewBox="0 0 64 64" aria-hidden="true">
              <circle className="outer fill-card-border" cx="32" cy="32" r="32" />
              <circle className="inner fill-background" cx="32" cy="32" r="32" />
              <circle className="select fill-accent" cx="32" cy="32" r={checked ? "20" : "0"} />
            </svg>
          </div>
  
        </label>
      </>
    );
  };
  
  export default RadioInput;
  