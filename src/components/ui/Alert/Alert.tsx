import "./index.scss";
import { BellRing, X } from "lucide-react";
import { Children, type ReactNode } from "react";
import type { AlertTypes } from "../../../types";
interface IProps {
  title: string;
  type: AlertTypes;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}
const Alert = ({
  type = "alert-default",
  icon,
  title,
  description,
  children,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
