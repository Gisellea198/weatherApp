const buildUserDto = (data) => {
  const dto = {
    email: data.email,
    password: data.password,
    Profiles: {
      name: data.name,
      lastname: data.lastname,
      avatar: data.imageUrl,
      coverUrl: data.coverUrl,
    },
  };
  return dto;
};
export { buildUserDto };
