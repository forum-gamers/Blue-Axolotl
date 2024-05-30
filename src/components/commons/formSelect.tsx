import type { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface FormSelectProps<T = any>
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  datas: {
    key: string;
    value: T;
  }[];
  title?: string;
}

export default function FormSelect({ datas, title, ...rest }: FormSelectProps) {
  return (
    <select {...rest}>
      <option disabled value="">
        {title ?? "--Please choose an option--"}
      </option>
      {!!datas.length &&
        datas.map((el) => (
          <option key={el.key} value={el.value}>
            {el.key}
          </option>
        ))}
    </select>
  );
}
