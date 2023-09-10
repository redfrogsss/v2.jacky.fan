export interface AlertProps {
    show: boolean,
    message: string,
    type: "normal" | "info" | "success" | "warning" | "error",
}

export interface AlertContextProps {
    alert: AlertProps | undefined,
    setAlert: React.Dispatch<React.SetStateAction<AlertProps>> | undefined,
}