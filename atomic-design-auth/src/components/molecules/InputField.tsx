interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputField = ({ label, type = "text", placeholder, value, onChange, error }: InputFieldProps) => {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
      <label style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: '0.5rem', border: error ? '1px solid red' : '1px solid #ccc' }}
      />
      {error && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{error}</span>}
    </div>
  );
};