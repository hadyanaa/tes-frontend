import { CrudProvider } from "./CrudContext"
import CrudTable from "./CrudTable"

const CrudContainer = () => {
    return(
        <CrudProvider>
            <CrudTable/>
        </CrudProvider>
    )
}

export default CrudContainer