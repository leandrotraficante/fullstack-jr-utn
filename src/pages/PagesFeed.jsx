import React from 'react';
import Feed from '../components/feed';

function PagesFeed(props) {
    return (
        <div>
            <Feed
                img="https://hips.hearstapps.com/hmg-prod/images/batman-1989-64085601a5abf.jpg"
                title="Batman se jubila"
                detail="Batman deja de perseguir villanos debido a su edad"
                color="red"></Feed>
            <Feed
                img="https://hips.hearstapps.com/hmg-prod/images/batman-1989-64085601a5abf.jpg"
                title="Batman se jubiló finalmente"
                detail="Batman se va de vacaciones"
                color="green"></Feed>
        </div>
    );
}

export default PagesFeed;