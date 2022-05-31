import React from 'react';
import styles from'./styles.module.css';
import {Rate} from "../Rate/Rate";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    const restaurantRate = Math.ceil(
            restaurant.reviews.map(r => r.rating).reduce((sum, r) => sum + r, 0) / 
            restaurant.reviews.length
        );

    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate rate={restaurantRate} />
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}