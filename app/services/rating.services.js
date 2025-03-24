const { DataUsers, Ratings } = require("../model");

const getAllRatings = async (id, limit, skip) => {
  const totalCount = await Ratings.count();

  const data = await Ratings.findAll({
    limit: limit,
    offset: skip,
    where: {
      product_id: id,
    },

    include: [
      {
        model: DataUsers,
        attributes: ["username", "avatar"],
      },
    ],
  });

  const list = data.map((i) => {
    return {
      score: i.score,
      comment: i.comment,
      username: i.user.username,
      avatar: i.user.avatar,
      time: i.createdAt,
    };
  });

  if (data) {
    return {
      rating: list,
      total: totalCount,
      limit: limit,
      skip: skip,
    };
  } else {
    return "Not found!";
  }
};

const createRating = async (list) => {
  const newList = await Ratings.create(list);
  return newList;
};

module.exports = {
  getAllRatings,
  createRating,
};
