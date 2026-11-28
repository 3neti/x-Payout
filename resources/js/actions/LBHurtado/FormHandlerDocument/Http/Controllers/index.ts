import StoreDocumentController from './StoreDocumentController'
import ViewDocumentController from './ViewDocumentController'

const Controllers = {
    StoreDocumentController: Object.assign(StoreDocumentController, StoreDocumentController),
    ViewDocumentController: Object.assign(ViewDocumentController, ViewDocumentController),
}

export default Controllers