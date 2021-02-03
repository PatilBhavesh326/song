import { combineReducers } from 'redux';

const songReducers = () => {
    return [
        {title:'Shape Of you', duration:'4:05'},
        {title:'All Stars', duration:'5:47'},
        {title:'No Scrubs', duration:'2:45'},
        {title:'Blackstreet', duration:'3:05'}
    ];
};

const selectedSongReducer = (selectedSong= null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songReducers,
    selectedSong: selectedSongReducer
});