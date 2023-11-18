export default interface LoadingScreenContextProps {
    isLoadingDone: boolean,
    setIsLoadingDone: React.Dispatch<React.SetStateAction<boolean>> | undefined,
}