import './toggle-switcher.css';

function PureToggleSwitch({ checked, onToggle }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <span className="slider"></span>
    </label>
  );
}

export default PureToggleSwitch;
