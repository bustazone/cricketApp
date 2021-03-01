import {
  InnerValueType,
  StorageControllerInterface,
  StorageControllerInterfaceConstructor,
} from './index.types'

const GlobalDataPersistentSingleton = <Type>(
  keyName: string,
  asyncController: StorageControllerInterface,
) => {
  const value: InnerValueType<Type> = { value: undefined }
  const get = (): Type | undefined => {
    return value.value
  }
  const set = (todo: Type) => {
    asyncController.setItem<Type>(keyName, value.value)
    value.value = todo
  }
  const restore = async () => {
    try {
      value.value = await asyncController.getItem<Type>(keyName)
    } catch (e) {
      throw new Error(`Error: Restoring GlobalDataPersistentSingleton for ${keyName} key.`)
    }
  }
  const reset = () => {
    value.value = undefined
    try {
      asyncController.removeItem(keyName)
    } catch (e) {
      throw new Error(`Error: Resetting GlobalDataPersistentSingleton for ${keyName} key.`)
    }
  }
  return {
    get,
    set,
    restore,
    reset,
  }
}

export async function createGlobalDataPersistentSingleton<Type>({
  keyName,
  asyncController,
}: {
  keyName: string
  asyncController: StorageControllerInterfaceConstructor
}) {
  const out = GlobalDataPersistentSingleton<Type>(keyName, new asyncController())
  await out.restore()
  return out
}
