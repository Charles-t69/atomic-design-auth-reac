interface FormActionsProps {
  submitLabel: string;
  loading?: boolean;
  onSecondaryAction?: () => void;
  secondaryLabel?: string;
}

export const FormActions = ({ submitLabel, loading, onSecondaryAction, secondaryLabel }: FormActionsProps) => {
  return (
    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <button type="submit" disabled={loading} style={{ padding: '0.6rem 1.2rem', cursor: 'pointer' }}>
        {loading ? 'Cargando...' : submitLabel}
      </button>
      
      {secondaryLabel && (
        <button type="button" onClick={onSecondaryAction} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
          {secondaryLabel}
        </button>
      )}
    </div>
  );
};