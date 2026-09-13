export default function Featurelist({
    label,
    value,
    darkMode
}) {
    return (
        <div
            className={
                darkMode
                    ? "academic-item dark"
                    : "academic-item"
            }
        >

            <span className="academic-label">
                {label}
            </span>

            <span
                className={
                    darkMode
                        ? "academic-value dark"
                        : "academic-value"
                }
            >
                {value}
            </span>

        </div>
    );
}