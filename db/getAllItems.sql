SELECT DISTINCT ON
(i.id) i.id, user_name, user_phone, user_avatar,
       item_category, item_title, item_price, item_description,
       item_location, item_lat, item_lng, im.image_url
FROM users u INNER JOIN
     items i
     ON u.id = i.user_id INNER JOIN
     images im
     ON im.post_id = i.id
ORDER BY i.id;
