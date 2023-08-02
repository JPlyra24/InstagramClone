import React, {useState} from 'react';
const Post = () => {
  const postInfo = [
    {
      postTitle: 'Ahri Ruined',
      postPersonImage: require('../storage/images/perfil.jpg'),
      postImage: require('../storage/images/img1.jpg'),
      likes: 45,
      isLiked: false,
    },
    {
      postTitle: 'Ahri KDA',
      postPersonImage: require('../storage/images/perfil2.jpg'),
      postImage: require('../storage/images/img2.jpg'),
      likes: 70,
      isLiked: false,
    },
    {
      postTitle: 'Basic Ahri',
      postPersonImage: require('../storage/images/perfil3.jpg'),
      postImage: require('../storage/images/img3.jpg'),
      likes: 25,
      isLiked: false,
    },
    {
      postTitle: 'Ahri Blossom',
      postPersonImage: require('../storage/images/perfil4.jpg'),
      postImage: require('../storage/images/img4.jpg'),
      likes: 249,
      isLiked: false,
    },
  ];

