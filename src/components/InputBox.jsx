import React, { useId } from 'react';

function InputBox({
  label,
  selectCurrency = 'usd',
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountID = useId();
  const currencyID = useId();
  return (
    <div className="flex w-full rounded p-5 bg-white text-gray-600 text-[1.2rem]">
      <div className="flex flex-col w-1/2">
        <label htmlFor={amountID}>{label}</label>
        <input
          className="bg-gray-200 rounded px-2 py-1 mt-2 outline-none"
          id={amountID}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      <div className="flex flex-col w-1/2 items-end">
        <label htmlFor={currencyID}>Choose Currency</label>

        <select
          className="bg-gray-200 rounded px-2 py-1 mt-2 outline-none w-[50%]"
          id={currencyID}
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
