import React from 'react';

interface Props {
    homeUrl: string;
}

export const Page = ({ homeUrl }: Props) => {
    return (
        <div className="page_container">
            <h1 className="page_title">
                <a href={homeUrl}>Allen Garvey</a>
            </h1>
            <p className="page_description">
                Selected musical compositions and recordings
            </p>
        </div>
    );
};
