export interface StorageControllerInterfaceConstructor {
  new (): StorageControllerInterface
}

export interface StorageControllerInterface {
  setItem: <Type>(keyName: string, value?: Type) => void
  getItem: <Type>(keyName: string) => Promise<Type | undefined>
  removeItem: (keyName: string) => void
}

export type InnerValueType<Type> = {
  value: Type | undefined
}
