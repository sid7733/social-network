import React from 'react';


/*type ProfileStatusType = {
    profile: ProfileType | null
}*/


class ProfileStatus extends React.Component <any, any> {
    state = {
        editMode: false,
        title: 'yo'
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        );
    }


}

export default ProfileStatus;