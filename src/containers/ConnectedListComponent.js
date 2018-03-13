import { connect } from "react-redux"
import ListComponent from "../components/ListComponent"

function mapStateToProp(applicationState) {
    return {
        songs: applicationState.songsState
    }
}

const ConnectedListComponent = connect(
    mapStateToProp
)(ListComponent)

export default ConnectedListComponent