import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h4>Selected song</h4>
            <div className="row">
                <div className="col-md-6">{song.title}</div>
                <div className="col-md-6 text-right">{song.duration}</div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return { song : state.selectedSong}
}


export default connect(mapStateToProps)(SongDetail);