import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongDetail from './SongDetail';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="row border-bottom p-2" key={song.title}>
                    <div className="col-md-6">
                        {song.title}
                    </div>
                    <div className="col-md-6 text-right">
                        <button onClick={() => this.props.selectSong(song)} className="btn btn-primary" key={song.title}>Select</button>
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        {this.renderList()}
                    </div>
                    <div className="col-md-6">
                        <SongDetail />              
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);