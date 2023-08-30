
// Problem: You have a type for which you want to make sure that at least one property is set.

type VideoFormatURLs = {
    format360p: URL;
    format480p: URL;
    format720p: URL;
    format1080p: URL;
};


type AvailableVideoFormats = {
    [K in keyof VideoFormatURLs]: {
        [P in K]: VideoFormatURLs[P]
    };
};


type Split<T> = {
    [K in keyof T]: {
        [P in K]: T[P];
    };
}[keyof T];

function loadVideo(formats: Split<VideoFormatURLs>) {
    //
}