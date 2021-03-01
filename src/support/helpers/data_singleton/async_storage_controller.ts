import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageControllerInterface } from './index.types'

class AsyncStorageController implements StorageControllerInterface {
  setItem<Type>(keyName: string, value?: Type): void {
    if (value) {
      AsyncStorage.setItem(keyName, JSON.stringify(value))
    } else {
      AsyncStorage.removeItem(keyName)
    }
  }

  async getItem<Type>(keyName: string): Promise<Type | undefined> {
    const jsonValue = await AsyncStorage.getItem(keyName)
    if (jsonValue != null) {
      return JSON.parse(jsonValue)
    }
    return undefined
  }

  removeItem(keyName: string) {
    AsyncStorage.removeItem(keyName)
  }
}
export default AsyncStorageController
