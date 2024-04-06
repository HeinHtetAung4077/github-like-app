import React, { useCallback, useEffect, useState } from "react";
import Search from "../components/Search";
import SortRepo from "../components/SortRepo";
import ProfileInfo from "../components/ProfileInfo";
import Repo from "../components/Repo";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const Home = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "HeinHtetAung4077") => {
      setLoading(true);
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        const userProfile = await userRes.json();
        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        setRepos(repos);

        console.log("User profile : ", userProfile);
        console.log("Repository : ", repos);
        repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)); //* Descending dates
        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setUserProfile(null);
    setRepos([]);
    const { userProfile, repos } = await getUserProfileAndRepos(username);

    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //*Descending dates
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //*Stars count on descending
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); //*Forks count on descending
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepo onSort={onSort} sortType={sortType} />}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {repos.length > 0 && !loading && <Repo repos={repos} />}

        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Home;
