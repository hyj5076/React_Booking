function CustomDatePicker({ value, onChange }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      min={today} // 오늘 날짜 이전을 비활성화
    />
  );
}

export default CustomDatePicker;
