import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import AdminDashboard from "./layout";
import StudentDashboard from "./studLayout";

import { useEffect } from "react/cjs/react.production.min";

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [role, setRole] = useState("")
  const [loginMsg, setLoginMsg] = useState("");
  // const [loginAccess, setLoginAccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [roleError, setRoleError] = useState(false);
  const [roleErrorMsg, setRoleErrorMsg] = useState("");
  

  const clearAll = () => {
    // values
    setLoginEmail("");
    setLoginPassword("");
    setRole("");
    setEmailError(false);
    setPasswordError(false);

    //messages
    setLoginMsg("");
    setEmailErrorMsg("");
    setPasswordErrorMsg("");
  };

  const getLogin = (e) => {
    e.preventDefault();
    // Validations
    if (loginEmail == "") {
      setEmailError(true);
      setEmailErrorMsg("Please Enter Your mail Id");
    }
    if (loginPassword == "") {
      setPasswordError(true);
      setPasswordErrorMsg("Please Enter your password");
    } 
    if (role == "") {
      setRoleError(true);
      setRoleErrorMsg("Please enter admin or Student")
    } else if (!emailError && !passwordError && !roleError) {
      // let loginObj = {
        
      // };
    if(loginEmail == "admin@siet.ac.in" && loginPassword == "admin@siet" && role == "admin") {
      return AdminDashboard;
    } else {
      axios
        .post("http://localhost:5000/api/v1/login", {
          Email: loginEmail,
          Password: loginPassword,
        })
        .then((data) => {
          console.log(data?.data);
          if (data?.data?.access == true) {
            window.location.href = "/dashboard";
            console.log('Login');
          } else {
            alert(data?.data?.message);
            clearAll();
          }
        })
        .catch((err) => {
          console.log(err);
          clearAll();
        });
    }
  };
}

  return (
    <div className="loginpage">
       <header>
        <img className="headerImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABTCAMAAAB04IkEAAAC61BMVEX///8Adj4AdT4AAAAAcDP++tgAbSzE2My3z8AAbS0AdDsAcjcAaiYAaykAbzHw9vP/yACMtZ0AhUr/zAmKsZl2qIuEsJbS4tnr6+v115v6+vr///sAo80AaCEqubzl7egAnNGevqoAsMEbfUkAodAfs8Hi4uIAmdL+/eBhIhsAXwAAp8u+5NR8nHrK3NFJvsJPkGnU1NSSzdtCimC5ubkAqsgAktgjHyBdmXWlpaUOfMGKioqYmJhpaWnHx8fV1dVRUVFuvdwwglN8fHxtbW3F4uqr4NBYIhxCAABLAABpIh6XnVwoisr+7a1wyMrb7NOgAAD//wA7OztMTEzg8+UAkNz/3UT//+x1JB5pk1ThsWpPIB6lIyO3pWLoTyLqYiFPLhv4vzEAgz3UlSCr0+y7063t18ZEAB3zuQD/5kjs17tks8TrngD/00L06NHpzEX+9MOXlHwiGBP+6JojFR01ABX/4oThw3ojAAD/22kAq1A1AABNjlA5vLFvy7uMm1pblUH/7QDkukzgy2vw0J+R0M/ruDvquV/FsYXnvYX4pR7/x0ns337v05PSrzoijYIli6K84p2u2nr3wmD5oADSkyPHnjDp2GSJxZrL4lYjkXjP4/LIgRrvryugXju1ezrUkEOzYk7TvjN8OjnHnEixi06ha0l3sNZjEC2IUDunfCsAcMB7yvG02GSORi7//1z47XanZDNwSjnumiPW7LpyKzvRwFOIajZqPxr83iW0yNaApqfIjABuRkiFZWZKgqEOO16SX0owIwgmX4aItksAR3nd7ZcADzEyfH8/UidxwYEPMiilcSQdWDLVwhRjAQBYsUigqyuFkzO4qye4tCs7rGNhXB46Hh7hfyuXMjDofA/ROjHGHAO3ZWTAi4kePylYxaXDRyTMZiyScwDAu52fRyf/yKLAbT30VCv2rHWrEySLBAClTE1SSDVQRwqT17bQjIckACk1FQCxSwntWQBsZUDftqyEBx30igADAmI3AAAgAElEQVR4nO2df0BTV57ob34YyO+QCMneEAOGBlCWQolChARKKL/UdohMUChdI7OSKBGtWtsKWKnE0c6wM1NBZ0vUVWzVmam1zFR52/btr/f27U7XvtbZtU7nR7fb6Uy709fd93b63p/v+z3n/kpIgP6Yad8bvkpI7j33nHPv+eT765x7YZglWZIlWZL5pGu3Pf0Oe4btC8muZfAzCm8e7/rklSzJ/7ti56QrY4GPX+cOOObJhJ15MrKbORL5OsD19U/TRfbIHyxCjnyaJpbk40vZyMi9Zakbx+7eefc9d9199zPW5hV3crJzzEohsneWNY/de++9Y2NjZZ0flysob0/E7V2RyOjuSDgCP2H71yOPMMzujZ/0DI5aTAuLxXJsvjqM5YW5NY0umczVWFWTV5jl5LY7s9JIudWZdLBVss85t25pM1npm2Gk1bMLVlue2qOkvdI+W9PUlZWd0mBasWbogXFOuxn62bxixYqVzSkXYGdBQfFddxcXfxnAWnHHHStXrlyzZk1+0eoxO9M5sgI/w4bVq/Pz89eMfTy04hsZgCr+UIRIGLgKD8JP10YLwPVJ1B/TbTn6hwvLV02ZyWILG3Uqg1KrIaLVKg1qnS6H7Mp2qFVqtQqFvMEXtUqvUzXmWIXj86AQ7oFCjrzMHZ3bjIpvhnGQVkgdq/jBwWrVtGHH8qSaHHxnOFlVLt1LuqNK6o7RocKOk/6rHLmkClJGqEQt/pAtjhoolOtQCSdWyNVuXcWVUav1Gq49Fdeg2pEjdgPBmkPWzqKiAgCrgIBFyAKw1qzOL7jb3nkHfOZQQ7YK8u/JfC2TBbXV8ROP7x1IHKdYcfLEEzGQQcb+ta8ttipRui1PVpjN22q2mXnZRkX4bK7Al69m1FmFeoNGBiKX8QLvlLlkX5aafpbTrWIRjVJXwROwXEl34mE56duQNMO3QOrimmFU4g6dAJZS2GhIqpZ2SiJ8LVRylOIODsgapdh3jQu3KJPOWHrq9L2WgCUeZhDA0vOb5LQm6KecnLss+fQJWHesHEu6CCJYYxxEoJ1WA0ZF+fayOyhoq4nk5xcV35XxYibL0a/b7ZEIhSqRiMdHB8dHT44PPjIIWIVjsa8NWh5aZE2iHLM8UYPcZPEgbTP/yTfy787/xp+YhS3ZZo6sdH4W26iSXNfUsSJjKBdYkEtHQavjlBaAxW/LCBZbpZaMo8CoklMparGRFLBIm8lg5WqlbCIrWunuHK47MNwcWFaHTOy5g/RayX+kUMjlcumJSsDiNkjB4ssIYAlXzTAHrBSyOLCKv1zeeR+Rsm9+61sjBUAR6KyxO8eam8tAmsd2FsGmorWL1FlPnkg8PkCgmohPjk6+MA4vk6MgJ0+OIlwxAMu+cdniKqNyzBLOpfDwKuob69ZtAFm7du03OLS2ZZnJzq9aTHPJYl1a4UKJgyVP1ljSKy4ppuEYWC5RERnAgmbEJsSa5DxYgsaSydNorBSw9Em9wc7opbYwRymeBQWrkTtH3Kqmm5S8khE6xH9M0lhyflMKWKS4RGNxR6cB6441UrIEsKiPdQexe6e+vaYIKLLawXW/E5TWHTvvLeu8uwCKru2cd/RRuoCXA5EIcJXo65scHR/tiycSYVBb8UkQ0FwnEa3BvSHLxwELuPpDZCfHmm1lkaE/3bCueEPxuuK1xcUFa9f+KSHLCk5yIUfWjtQaKpTSiyuKAJZk/GRJb+FyaytIoeWCisgIVoVSAq9cwu8csJI1Fi0pT6o2SyXnNAzthTzFFgqmUM5prGxRycg0jbSQoIskqkp6kqLG4pARwRIKp2oseRpTiOxIyEoCi/ex8guQLFBZ966k3vua1UX51ruKiwqKdy7ode8aGD0yGhkwJSYAo3g8HImYZmOmcMwSCoWfiMcnJkdfOBmNhWKh0Mdw4N2myB8qiVIqzMkCL2vbn4K6WreBeeorBdCp4rVr/2Qbul9Z5dnbOGto2p5cQ7kj6VubBqw5WEnFYcRCy9NfWWkzOsnISesSwRLMbDqNlVQttYR8ZeRFo5Tsn+NjaQTfTi5zcLWLXU5WXXwPpaYwBSxh21xTmArWnZ2EHZGsFI3Fu+rF3y4uKio2Nq/kvHnwswruuau4oGBt10I5TnvixMCJSHhqYnQ8njCZYvHE5OnTT1jOjI9Pxwaj0RAortHHEa1oybK9i/bh40/+cZKgGVy3DqIg6FNBEaCVdypJjkbY5ApytfRCEsumhHBPp9ND5KZJBQsLQKio06mUklGSqTFyX4QpFFggzaglzYhg8ftTwZKnVqsX2tcIBaS2MEfUjgSsHINMOEc1XxGvi6RfKblcVIQ8WHy35vexeBWcagrvLOsk8NzL0WEXwSobuZfKztWgoE6NFIAtLLuTbLlzDfrzxffdDWCV2e0lmdFydgEDx49HElOTo6CsYhNnz//Z0Uvj587PTj99/tKFp58+80I0NDg5efLxaCgUmp1ddEprh2nXMok8gwpr3YavME8VP/PdZ+A7UPyMdHfJjlSFxcDYiB5wTpbVaXRaswpzG3W6ZB8LISo3Go3O8hytGNtxF3I5DYvmiQqVGmEQNZo0zfAaSy71sSQxgXTA0BISeypXZ6vlHDBSW4ggcXEsgmXUCd8DmbZR6JFwDhJ9xUe/ULfUFKY473KexiSwyKa5YK3svFNClgiWJHV6D2CU/61idNW5UvayfIgK776vuAADw67MYO0eiB9NDIQnpuKjkUjs7MUzsYtnRy8//fRlS+jh6UuXpi+f7L90MhSKT42+8FwoFJ3NmOZPFTZyoEQEp/M76LevK4Adz3wXpOi7xevKpWBFnkw53ugQr6xKmoQ0FtILKXHe9VwMaDSIYFFTs6DGMjpED1mfrhlBY80xhRRZabVCTKipYsS8g0EskCPigP2rkUQnQt2MXimIeDpgynlRZTaFgm6VmkKqs9KAdUfnvWtWrllNybKvSQOWHQxf8ffWFq2VZBfGICosQLB2prue4qGYuUKuYpHIbOnR+LOHnz19Ojw5HgrHRkPTg6dPjj995QcvRKOD4Go9F4pGd+/evXFxrtaBiAQsqrCewu1Pffe7X/nuU8xXNkhV1pE5CsupE6+qIU31Eh9LzoMluLRyuQgW788b0oLFN4OWRp32PFQCC0lgybmtUrAE1GGsRUsusYU54kBD/6wOwYuSqwuFQstzeMmTWkVh6/JsJmMeiy8vAYsaUfkcHwvAWglkgdNE3HD7ah4sIZFgZ4w8WJLkQld+fn5RWfGC3vuBgURkYiIeiYyfLx0tnb0aiVksicTxmZmZxPFwOBSdHhzvufD89Gx0coLqrMVaw+2mHSI46xCs7zxF97BGlnlq7YZ1EoUVjqce7tSJnrShMHUvQ8HiighgcXkiHE6pjyXPrLGcei56y9SMEBVKNZbUVxKrzdLLRQKz1DLOGEpsYXK6oVEjfNJWpe2cTjgdjSx5V654YkK3nWk1Fo9fOrBWWgWyeLAK1t7TWcZJM6bZ16ApFOcyGOPqhcHaNXn0QHwgMgVcmeL7D4+fORu2RAYQquMJkHiiry8Ri05He5+PhqJXxidOPge/Fxsb2iLHRHC+A2DxXEHfnmG+C2DdJ+zfMTdBKjWFMnVjTnlqgTSmkHJEx4rGWMuVQmyVyRSKijFtM9J0g7Yml0oV78zJpQPGmyeqL8SKRU0oRoWgQTDVwJ+gLu1EJny5uPBSnh4sAp2miutVjRiHJPtY8oxgrbHetZqSJWistfcImXfcVfwtcL6KJd2TgJWZhNETA8dRX4Utz45OPv8sYJVAVRUOgxuPMzqxwXjfDGitaPTCxQtXJoGsUPS5xS6lCY8KtvA+khl9ht/DFn0FvPcNVgGsAybbnMO1fGCFF1dj0KsqJHOATNLsiQBWlUbw96kvzPtY8ozpBolvjmEhNFNoTSkgaCyZVqnUwg86/HzGS1KtgS9HBhGHmTKuF2aicwTwZdo8l0bGGzpVWl0pugNpNRb3lYF92CWlVqkVO5qcIE2NXkWwVq62jgE++QCJCJZ0rrDoXlBYBfmSEUewqI81Dwa7BhLhSfSvSs+cGZ+ORRKJmQHw4ROhidDk4HiMJEZP9iWisejF5y5MX4HgcDCKsigXXuJk3fcd4mN9h2YUjMUgGzZ8RwCrJB6ee3iNlvc/uLHQAlw12cJ+bq4Q9/Jed47ImoOqnoXTDTWS1DcdcYRLbIaCxcf6MiHu4l9ETZAluDhkQilb6IxoC3OUPMRg/UStl94QJvmZmTSWJPcmnkNyVCifc/oSsFauLrsLp/92duVLweKnBgtOfa84v6hYmqFHsIq/v3Ye553t2rUMDN5UIhSJT7ZceMUykEj0RSLx+DgYwTD8S4xODQ6GYoOjM7HohafPv3DyylQCHfjZxSWzjkgSDhxYRC89hVgVg8slmMKSyNG5h2fpBabEsFurkvFjnqXmr5lcm4uebo1SDAr5pQnLJU5NerCoQRL9Ocqw2IwY3onDJsaJ0gETxlojJwMg2HKNYAtzkieYeVEZ01/BBcESLkwK7VKNNa+PBfisHhvLX726aKeoscpGxqg0n/p23loArliqw+28xro7facZZsfMwMBAeGoiZjrzg/HpCTCDfQlTX2gqHJm1hGKhWGw2FI6/gmid7AtfudDbe/GF6MToc6CwFmcKd0i89w0ULPSyvrKuGO0iuPPC3l1pZgpxGk06Anz6W6OrobvFBKlcRm2BcKG1wkqSRcwVNkoypOLoCM0wvGKUS2iSjKg4YEoNHWJ+lrFKK6fRpmgLqcaSnA/tWaYFPRQsGuZl1FgybhYpCVcRLN7HTKuxqF66654iXGYlgsVxNfbhqW9+71QxmdLpHBMkfyGwmKMDxxOTZ2ORib+8unnCMhDuS0RGwd2yxC+fbm+52FJ6+vIo5t0JWU9cmb42fYk48LPR3cvmSbkKst0ignUXmdBBL8u9DrTVBsRMTDfssMyZKAQxypKHnBcDnQbkl83IUnWJUlcj+JrLJYmjDGAZtVoZP8Enl4w71wzNY4lGOUlJSNMN5Xo5Fwdy+YVCA1+VlreFvMaSC64PkfSuu1RjzQNWElD85UiZ0pFnSDeM3UMmaShZQrpBNIVgBU99u6CoaO1d9juFhX7EFCJYGRmwJ46Hp/pikfj106HIQGIiMjDYZ7KMX+rvbylth38trf2XXojOvjIYC52cgLDw4vlodGr8JNjC2cUkSrebjizbLYSFRElt2BWe/g5ChS4Wbwl3A1ipWSwibJVeI1UR/LjqiT4S0w08Fdz3P0cyN8SnG+SZwWKMfDPSWuR8M9yyGXnSuEkx56vN5SMwjYarV5y6422hJE0hgrCAj0VTGJmjQs7PFPsvTwVLnhK9imDdy5Stxqnmu6xF+flpnffVBQXfxilnOz9ZSNZjUY2VAayuXX8QP56YikWmT0fPJCLhvgFTX9wUe3p/T0v75laUV0tLW/Zfi0YnXoiGTs5EBy88d+XK4BSAFZ3dnWGQpOI2HSnZyJNVSHja8J8if07mDOH/n+/ldu0tyQAWfOm1Kq2oMIRvL0mYZomrqJL9MHWj6HovwhSSZvRajVgNVxU3fSxJNyTBxaEmVKvVCF0gllkpmZBWcbZQMgktw/K8D6mfNyokYV46sFI8Q5modRcxCU3BomQV3WUtEMEaE7lag97XN9dickvECpyuecDqevEEOOtTk7HE+cObI5GB2IzlFfDie/pLe1o2v1Tp9/vrX25rLy3tbzk5G5+MDo4mrkwfPH/tysQ4eFl7M46RRLZbjiwreWQZDQ0f+s9/QczfnrXrKFcbLFzMGCsBjeXOVEl2rlJn0HLjzV9IYmv4ZTPy5Iub5B9JElvzgQXN1JBmZMLIyPlmaOZdntSQBHUBrHI92SM6Y5JuCbZQ1FhybZ5cI/Zbl9Z95xKksgxgSS6KJGqlxSXphvnBYqyYrSraaS2QOO/CLDSxe98rLgBbKDpZY3fdNZ+PtetFCAKnBiOJ84PnTcBVZDIaifeXtrT0tLR5SQk/glXa0g9kDc4+1xeLvvCXF64MTpyMzj63e9nCThaCtWy3aXcJIcjyV3/x13/x12u/vGEDIAZc/c1DsLmkZKNl47JMppC/vIUVer1SSPrIuVzznFXAEvJ4/2jhzLso1sIarhm+JSXRI2qJflLrqUicP97E5Cqla1zEMecmimkhYUoHg9RsycJVbUW6Li3Kx4J+cr3iltSmaix5Uj9RksBiOnG5cdHdTgEssWAXTgwWf3MNqicONSrzOu+7wa2ajEXCE8+GI5H4QDgeiYHH3tJzq73VTe4tY1sRLEAtGpuMxgYHoi9svQJe1iPPoZO1sNLagc57ScwUi6GT9Uj8rxQPPhhct2Htgw8+vO6/3Hz0+7DRYjGh4pofLBRrjlIrDgNJDHFLk6kHAsZHpRPCQrlMx1nD5UphtBcCS2hGGAuaf1KJmkCdZaWSqxXY4asVLFtSKMtXxdlCLiokscRyxiWkgGVCh5MEweJV0BywBO9Kmcf1KlsMZ5I01pzvVTJYPFmdRcWpYDH/tWB1fvGpncUA1p3cQj+y5B3BWp1et9h3HABLGI8lfhCPRyLhgchUbPZSP2DU07P5JcoV8/Kr7YhW/9OHwRhG+0KDj1/ruTKJtnAxqaxjJN2wF+B5BODZaLEMBv5W8eDDf/1gdfC/Pfx3j/79spK9JosF9+2au3x0rjSKa2K0Alh0ZOj33VmlFZjgLizvY8kXCRZpRrCwWgEsDpCkuUKuFKcJxBsZ+AaT4kfOFkrSDQBWlk7oL0DLzu0LbwozOO+cEUy9meLjaixoh94z0TlHYzFlqLG+VYTq6U7xLh3qvKcHa9eLA8cTibMx09V4/LQpAm78YGRyP4aCYAnrOLA8bQSs0oOjs/FoaDBy5eILF86hLYwuJkX6JEmQ7gZ4TLuJdrI81LVHUf1gdfW+h3/46DcBKNhk2YtgRdLksVK9jmxhxkSisTjQqCFhDaKW4O6mwNUNaW5TWaAZ3i+XaCwiyasbkgZMXEgj0VYSp5rawmSwmCot3105XReaIgQseQawxKpTVzfIZSmZd/n8GgvJInksJwVLmIQuG6M+1lr0sVbw+mp+sJgjM9TFujr9ytlIOBHpS8z+gBi+W6Wt9YCVDX/aSjcTss5fmRgMRWeuPH2ydzo6RZysBX0sNkKmdBAsVEslD+EvAAu4+gfz31iWkS0AFpTpihyYe7y8Ijtp0CvEKIssiZHksXgPhb93APOW9GovV3Ipo0zLZhhZTXIzNaLao0cIK0jT3v7FD5hGIyKVrLjoC7WFOZKVp8vJLTpU6RBqk+9tRVnUlE7Seize9n48jcXNLBcVGVMmoVfDz9pv7SyAqJDp5GUNB1ZR2usJOitxfGJicCB8/TK47gOJccvEfgJWz+Ye1m5n0BwyL7VvJmTtHw1NRkOJ0Mn+rVHMvuNa0oUyDjZTXAALVdYyeNNFwXr00RtoAcmejWSucM6qGbBJSrXOlVtY7jSCWAsbJfE1WRIj3Ewhl/NgZYvL4DkFsFy8TSWDxsJmGqXNyAUi6Mobtah85oLFm0KJFZLpBJGEF9QWpoCFNxUKDr5GO8cYzutjCVHC3DXv8jk+VsY8Fi9G5KoA70cQ81iEreJT31xbVLBWzFvaebDyM/hYx8B37wsdtwxejQwMnggnTKdbS9vbwcV69WVgyvYwqCzG29ZOwOo/MzsRCsWfmP3a49PRyfhzIXCyMqssdseR7Sz47mQJaclG5CcGKusRi2kZgrV/23+/YdmNn4Grh0gZXPBuOxbvlq5xQJ9KozSQxe46yY2rcu5GCeG+QuGWnDSmY7k4WZYJLFA1Kc3wbjHNAahkwoRO6l06uIdWmydZq2wUJFtyhxqxhTkSZxrBMgqJKrk85d5W7nz4U06/uoFGnElgcacvXehHS80PFk9WAclj3cEnQ/Pvvu/U2qIiaQQogFWUloBjA5jFiocTp/snI5HB41ODppZSAKu0p7TNz9gZ/8OVgJe7jVNZ169MnAwNhqMXW85fIWDNo6/YsOXGjcj2A5htQGoeQi9rY8kyIOyrwNUPt50KIWjE+XqEJrOOmNzbIzdeuyFVXABWSkaIj7moNsoS7yTlwWL51Z5g+XTiXTrzayyNJJJLSgcpqdKb/05obsBkGt6/kiYOWDH3LlejpUuOCrF/BtHnl+tSF4MtYAq5fqdqLEQreaEfSdEsABZjX42ZLOJj3QcGr6wM/lvvG1tTjDcWSuacFgBrRx8Fq6/nl5GBcHwgEUv0lxKNRS1hbSt68EwPB9YPQvHB2cFE9OmjZ6jGmmd98hGL2eV6zRTmFzeUPII6qwTdd+Bqn+zRZehZlcSo78VNFh4zvdboMkvTDo3Se244JSKXBGdgCnlbKAwmyTnSzXSN1nL+luWMUWFjsnMkWE5BP0myTalr3mV8ukFyq2jSMtQqMXlBvg05gsvN3wmt1Igsp8IjZt7lGfJY8rQaS5Ym857uZopksBj73WgJC4TMO9FZxKmXLnlfCCzGfmAgcTn+ROTs/olIOB6ZsgBYqLCoJWReepU4WbWvUlt4MTo5DmBduTT99OBoH5rCwYw6K37T9fpN1w1LuIvLuqPRM+0tAWe9mrjuj6LrjhYyxu2HsNByzhUZckkXkkrSCzJxtEEc1MuV3FcogFUl5ujFpcncFzuzxkrTBgwN1wwjxghzTSGvCSSL05MmlAt5hSSn84Vzn91QKJ7FXGPImUJ5ZlNIvKekdAN3v9yCt9jPBQvIKi4oSJ4rJHmI4qSnywjLZuYBCzTWQCR+BsA6PhHq6yfJhtJWD9rAh189aAOLWNkKYLUjWPHBWCwRHQ0NhsYBrNhsKBNYNpNly2uvDb1uObpx4yOW3cSHQu0EfrxlfB+SVb3t0fu4TXRSZ2NJ2DJ0829uPmaRrMtKBksQLR89zU03kNtk+MtN16IIK0gXAos3UfLUZjKnG2h5Uq1M6Gvysxpw4T5POsaFkhWk/ENBXBrJFJEjefEqD5Zs0VGh0I1FzxVKBclKBSu/oOiepCXDC5rCRAI0VnggEUFTGJmIJChY7a1gCe3uOm+dG8BiewhXpRdD8clQLIH3Q0cRrNDejKbwyI3HLFseewwgwUdfWTbSCR2L5aESgClYvQ/ZevQfUWFRdbUb0++jFtdrrtdNj0nuWnUpxSEXLr1WV8UPLo0KiTEQwJLkieiKgeXpEzkSwWYErcK/ah3C82rmu2GVHzDJLcjaZKUjuTkSbWHqDat4Gjrxbg7eNeJl3ikdwYQuyhSmA2tlKlhIVvGXJaYQFNbOsZRMnx0fbQRgFWRw3mcG8AEgg/CaOB4ePDERStC0O7GEBFHyK0CT7+2hvmg4nsDHg4QmE8/FMuorhgm/7tr2usVsthzBsI+L+5AsCBAn/xYM4T74+Xv4TBY+kOy7xfIkgDVuecwlcbKya+Q6lVqpxYdWyfCpVUqDXl0j+rfZDjUvuqq529QOZDRP3JDh+VikGQPXjGxuM4ykSunzsYRql+PDqsSPyVMzuckdStedKr1aUiaJS+cqyS4mU8WS52MJ21T887HEUhKw7EY7/DcanXOnvnFjksylh2zFl7TXk+kCU3i2D8EaOD4weGImESFJrJY2j/AMSgTL34pgtVyKxvtiAFYYwYpHQzFLJpW1HZhy3fyRC/wlklmHyI8sukJPfdeD+3746D/u2/foo1+zmKiRJI69JRa/4TKfc5nNryUltIzlhXk1VY0ujVKpcVXlJt/l4MwWhTdbRsm2bKTAKvmcbGYW2wwjrZK/linVpisyt5PQoXTdSSqSncSlMdMOhilPU9Pc4os6/c9adr2YuDwxCPpqYOB4dGZg0nK6p7TnVnubjVNYVGWxbei895+ZvRwK95FnscWm0N0ChZO+2tEfucyvAyMuyx+QTJWF6CrQVoBSEJnarfgnUFgmaiJjtMDeCBzx2k0gK+1a0iX5/GXRTzne8WLfzMRUCO8hHDgRmjk+YZnY33KLm4C2efx+vwcRY15+FTPv8chkJDFDH/b3ymAs8kSmKR23CRQWqB+z69xRhImCAxSV7LU8sm/ftkdP7lasf/RHJpwiRPeKyhHLa3jY66DrUp8NsiRfDFksV11TU2fPnrl64epUH7AVj5+Yikd6em71tHlJluFgW1vbw7X41tMKlvDZ2VfGIzMzkYHjJ/rOvjEzc+IAk2n8w0Ouc2bz+iHza5Eu0FMxgpZpb5dH8eBf7fv5tlN731GcevQGWYxF3SuTZe+yI5bH8BALGNA09+ssyWcs9k46+Q4OFLhU4GnhQ9Q6O9H5wv/w3s6rKHsneUiykbziPtjgFDbzwrKszV3p9XprAy/37N+/v+f27fvfeANAmYn+eGYidmb/rdI2N8libW5paSHKi7G1tZf29w2MRgamjh8/PjNz6eCz97/55k/uv/3Tf/vZzz766KN6N8tKKbNFImAMe9ej906CvoeI2nq8UkGSWPvg18/lh3bx7pXpkY0lJV0Ri8vcvcX8usUUnnvn6pJ81mIcLmOGgaEVzUzZ8PDwiH3YaMffTOeKTuOwHX6VQeg4gkWbR5pHOpmye5vfAu6ah4G5keYPR2Dzh7iBsdWBBF5+6dZBKm2tPSDt/wzyNpA18ePBvh+/MjPTs2/zSza3213ftrnn1r721kp4b3t5c+tV08TU8ak3AKs33ti6tWXrvpY333z//S/x8q+3f/1ThOxn9dgVm+kx89Ch3m7zjyIk9V5C1Na/uIEoBRGga59C8U6MKitUXccsrx1a3z2UnCBlWIw7aPDBhSDWcif9QIQlm6WfWHoQy28TdvJVOsupCyvdLJQh7XGv2JY1TSdYSWGuCqEmlu+S0F+WdlgYT7o1pTZWsju1bgwsrMnHMHwlLD0hp9A0FbvVyp8unK3YGVZyGYzDw8ASUzYCEDHDnfDZjhgNd3YOD3fBtmbc0UzuUm0uszff1wU7l71lt4+d6mQ67wN4PxMAABk0SURBVGFK3rI33wMbsFZPg+JgWwtKT0sPJ7e2bubAmnpj6rkfT13uu3qrvb2trbW1Fad2brVshrdtre2l7eGp6cgUKLaJibNnHt4KR14Hrt6/XyKI2f0fEW3DRh4z9/Ye6gbL9iQ3YwNqC8BS2Fh3pacu0ICA7fsXqqzIhI7J4lrfC2S5bkhd95xVEN5XOHDGucrRCLGXyqFzVDAM/EJZVciuguicftCtyi5ftQpCocJVq6yFq8gmh5JpJHuFJ19XOPQ6bTaG8WQznQvMpWUqmBwHPjt7+SoHg23poKgVA3boRJUDcxeNUCabVr2KyeLfWMkbfLRQ9qpVWVAb5iRyHTjnXKjT63VyAa3yVVAcxOXQk1e+tgo64LRTUCXXfwf2owZ6bMjCClcZsQcqKIYpCSs5WSdU5XBZSdNc1Iht0pyFE0rrMcmg4S6hkCwBkJqbAazhzpEyHqyRZoYZKescGWsettuHO2EjB9ZbI8AbvLW/ZS8b+2NQasMjuPMepustagz9DQ8DVT0tAleAx9aWzc/+4pdvI1nx+Btnz0xevdXSDiCB4BLllnb6bmZqdGICfLJXrl2/XvqLf377j94+nYwVyJdue/hux183gyk81AvG8CgqLILWHne1opKxv/vesWPvgn31Kq49RCd8Skp2RSyPDfUe6j1kdiU9zKhQqXMyNVqc56hRVjBGh7axUanOYzS4fFij1BWyDmUeo6efHNlWFc7iFKr11kIdzsBpDTKmSqvRw4XmwGpUalVKjcOKiwq0/PXHHLYKPgBYBnzgQ6FBifkwjUqnxdt0cpQ6I1OhNUAVVYYaTPcboEYASyXDpeYOzEoqdSq8VyxbrSpn8pSYrc01uKAmUolWyHnmKentGY0anF5pVJLalAaNkj5mwujAM9EqHc5sNS6u1+ngvNUatUHjcEIncVK9SivDx+PAZ6telcUYVVqlWqvVG6E3dAYL21SrNYg5q9UqdWqc/8rSKXMYq0MyXwQgDQ8bO1eg9ePAKiM8dQ7bV+B73NHcjA57cxkYP/u9oLFGmBHEsbMZtzU7cQMniFaPRG5db9m6Fd+0tD/77C963/7l6avTp2/dgs+lBCwoAZ9a2s/O/PLMG2+j2XzzgV/96o9Afnk9Fav7PxLdrAPovG8Z6jabt1niT8Ye2ru7pKTkHX+DwmN/b+iQecu2C+8y9QofBIoA3e69R4Ar86FuOMQ8lBQScmBhvhvBgnHD752Byc3N1eITVrIIWPwnqwhWVm5eo0abm5sHI+HCxeD0q5qt11aU56i1jQCWNlfYnKtUkRXj+Lg9fTYFC0jNMoKWyObBwiU0VQQFZSEpnKUy0DdWvaHQaEWcOLBw8SoBS6WRWY01DuFPCLg0WjLP1KiRAQsULGVOdqOG3ihtxMfFaCtycwEsQzat26FpLM9W6XOTwdLWQKvqLGhLmVueCy8iWGqNNjvLhSjmGAx5xmwHqvgqrRKuo+RGIOMwKB5UUsASBctoHxkeboat4HTZQY/Zh7uaAS8juFUj4GN1jnw40okGsay5s5ns5HwsHq3gQZGrFtBYW8E2llILCQawpRSYKi1t39y+WRBw7+9/HzyqN0F+9atfPfAAAevZZI31rx9Jgdhucpm3dIPTZDabb5iOPgGuVOyhA96AwvvuFvMh8yHXoaF3WUV1yca9j8QsTxw1AVdbeteDU2a+mRQSFhooWHAdaww4bspcK+cv6MnXz+ggA2XUkemKcgqWgSxrAFqwiiqtZI6kRqticTrRYeSOYDiwHPQNgKVxEbCsOrxBh8W/cMKDBQ1SjaWmnMBQcn9VRG+AZmUSsLRVUKeLydJjf4zl/KVx6rQ5SjkFC2qjYMERTp2gS6zkEKiIe8oJPZmcvHKoUA/BGwFLh1OKTtRYcnJ2jbCRBytLj/M7VoAeNuNO8odO4HRyDUkzWhj0MXR2hf5iSIhI3hhJwGjHrBMGgTT3jnEkPx0DL6w9Ne9e2wYclRJpv7WVgIVolbaUUrOHLyJTm2/fD/9uw/v7Eaw3H3iAgvX2dfz0PhHg7nZyG0wYbOHQenP3IbPZ9ZolfPQRfGhNbZ0i8K75vW7zoUPvDa3fpfhbDBafOBq2gH7DIBLCyGRLyIOl0eicCJbTAeZPRqYvjClgGTKDJatqbHRRj91Fpg9h1KxGHXmmFMuBpWkEyUawtKpsBIsgYnQ6YSw5sLQanbGCgKVphBrzYCjJm1yAQZtbCM3l8GBptLryPAMSCng4SSX0dNSNTh3ONoI2hdo4sLIolClgkR7lIE4C/XKwjRoN1VjaKgIWtW55Sj3Lg8WdPaIKX0OGxeYZXNWtlamY36b4b5UKIoKFbJW2X7p2sb29FdfOtLcRukrb2to337+5tL/lfP/B20DST9KBBfKlnyW3sgNU1lA3KCGEZdsNS+TYrq6SJo/C9+4h83ugs8CbeneTYlfXrmNhy43HXGZz9/pD3b1m183kBcrUFCorKpQ1aArxawkjQoiaR2Opk8HSgP+0ioKl5MBSlVMfaxUdcc7HImCBpslRKgl86NSDF0bBUtZUYSeoVwSFqbOlwjfoY4GjU8XwYDXWKBvzQGPlkO8FVMKpigp1LmNAhQJINSpzKwSwXMId9jxYBnTkwDMEB5PbA53UKpUULG2eQV2oVFFPABWtzsiDRdoEI6zNBbjySGCB8YJTJ0//tEIjPm/UXtYMWqgTPCemrKwMDCO+2uHFznR2GrlNDG4os5eBPmsmOxijaArZ2oOlqWD18GT1n+sY7L/4wrnS9ranL19r27y5vf3Cheulm1uvRzs6Dl87eD9VWOnAev9Lv07OPuHMn2v90BagBdB67IbF9OSOhkpFcFcvKKZD5u7eQ+82Kb76JKgsxGoIrOB60G6PpTx9jWosZYUV3Gj6pc6uUJNlyfODVS4FS5adnV1ICZJJNVZFzvI8XmMZCslEXo5BadRrwOpRsPIc6BLxYJVjJ4hXlEfmJrNU3BvQWDWNWoz9eLCcOlBJLq77oGbpkLIITY2yCsHKzdITC58JLHS9cHKPnoWRdBJ8xlwXAUttBTUuU/NgEY2lFjQWgoWXRwU/1lUGqqkqtLzqS5aRFZ3gMY2MDNs7VzQPN8Pb5uHOMogZy4wrIB5kmkc6wclqZj5c2WkHnwsKdHYNj711p715RRf4Y5zU32pr4e0gCoK1VQTrxuGOy/0dHS3t/Yc7OnraN7de6+i40d/ecrjj5iQwt1kC1i8JWFKd9aWPpP21mW66zOtBD/X2biFo/chi+cCtUDDvmg8NbTGvX7/l3TrFJNVW6I4d6u0eAkOYcg8YDxa6OOjC5OSQK1eeASwr8S8K6Xc2nY9VQb7/eUBKJh9LRdZvKWlVLMRkIljIqDaTjwXBgJwHC4wgqBcAi2gRlqniHlubrZYbdFr8XqARBD9LAEsn3Pkl+lhWrkd4Mrm6PHTe7ZzzrlNlOR3kFliiJ2GjVugNBcypB5hd+HxvlkQ86F4mgWVv/tBY9iF64c1j6LAznQx68p0kLoT/ZWVG8O+7hjtpdgvefTjGkDBxuHNkDHeUDY908lEhqiviT6G2Ki1te/UgciWCdfhwx+y/dxy+2D/dMdtxuW0zkDbbcb1/suPc/v7z/S23k8D6CYgI1/3v3/+ln0rVzXYka8v6IVBOvUOIlvm1/2FTKFjmvfeGhobATto9in/aRrHq7TUfWo9cpf4FMGoKwbuyOhCsXD0McbYBny2a1sdiHBqX0+rS6JgksMSosBDcDmOWAcY8BSx1ORcVqhhWDZ41wxg0oIKsLkFjgXeFncgUFWJckC2CBZYWGmGhP0amnDdCuVqtWq3Gha0IVrlOqI0cmwKWEBVqa4zlBigvjQoBKQhp4BV6XmiEs8KKwNErLMxmdRqX1VmhdYDChZ0Mm6tNB1ZzJ/MhKCWIAMswuYCu+nAZ+uXDIyQZPzbWiWC9hWBh4AjlVnQxYxSsexj7W2XNEBZSsNwvtYLPRLKfra09PS+99HJd01YJWe2lHYcnO8YPz14EwnpAVW1u6bhxrePcvvGO8f7N7edbS5PA+ujffvrTX0PAKGTf7/9JktKiZIHNA7S6txwCvfUPAJYbdhzr7e19bzvjV/zcvGVLL4K3vhsCwqE5XIkai8EwnCl3aDQ1SvKc/bQaC2J8jV6vUecmgUXyWJxG4DI72algoY+l0xKwcKmwEtOMGp1OrwH3SAALPWAxj2UsV9E3TgIWWOsq3hSCjsxDepk8FVSi1nDLpeDorOwsAxcPop6hHptKqxUWnQpgcY2AqtTqVLiuVAIWaCwMDfHVoTHoSJoLKtIaDPoaZrleA6eCBteIO+GtNh1YRgSrk0HLV0bTV82YfLcPG8tWAGldEBAOd32f5ONJRmLkw+E/5sAqW2H8/oqu5pGuFQgWG1AgS7V1uGrBbaPOhf8gSWNxYF0HfXW44/CN/Zc7bsCb51unO27eOtzRc7ljdj/QNb1f6mM9z/WQtdXX1/s/+tnPfvrrX99O8rS2R8DPGlp/aMuWLWATgZ9r7qCiqc7r9Xg+qoQeuBUfdANzQ+CJHVpvdr2e5pl+OQ6Sea/CpDS+5jrUer2MTOqQ7DP/C/bSDGijTljzV+NYxZIteglYTo2eLosTjiBgObAMgkVy3Vqdg2xUw9gWCpn3CnIQ5srJ4zdWGbO4N07rKqzRpVvlzHaQzDuMJOvQaUkn1Go9l2AqX0WWAFZBG43YH6tQm8MlZMSttFChg9bNMqxLR5fo8Zl3A3QDWsFuZeHqU71ahWvzabewXmzTUYXnXq7Hs60hY13hWCW9svYPRzrRA8dpQcylg7pixoZHjPYRtInwGb2pYVRVwBImsLCcvZl8YJqxOOwgc4k2f5q5Xc//lGisi8DTw5c7Dp/bByYRvPXxf58lv8/tP9wRvdFx+HqLCNYbb19Pt7aBdddLPz1pet1l7u3uXi8bOgQx4t/5ffxkIZ0xrEZP3tzd3b3F7IrM+fsByIHVyjJoERju1ZmdzSUbOetGf7G8rcN1beXCsbSAVTSFDFkeZ0w6ghalCVJ6DHekk1s9mNIJI1+Yf8PSuqCY04izdKmVlIutGLnqaOP4akzqHMMYaSGhEXpKTqFC3MaSMiw3IwhKkBWPcNI2+SV9WfRYsT+fRj7GX533K7bSzDuy1X5p8kJb/2DHCxc6Dj9/bRLiQPh//UJHx/M95w7Pnnseo0Iuj/XGH/2v5xeuHbMOEZdrCGJDDA63DHlqOaAUDT5fgy+4z4yWEHx5103L0aVFWF90+Th/utnf8PDB/0lmeVp6Sttb20rb+3vaL1271NZ+cXr6wuS1/vaL166Xlvb39+8v5bl64D/+4z/efmdxHLDHTDflri0QGh7q7r4Q8NSiBAKBJpSGYO8QuFt4B2J8oYcYLclnLEabTQqKzc3SHxsaNrIWy44l7DaSgaflWZuNtdMSDL4x2uahwO3x3Xr4IIJFE/Bc7r29tLW17SLeXg9CEvDv08z7T37ywNsfbV88vLZjkXMkA9rd/RtFEJDyNQUCPpALQ2gkzS75zSWsfvdi/2DPHskgBmpr/Z5Arb/ygz34xL0GJ+P1+H8TMPqb9jj3MPAfy3cF9uxxe36z5x08wu95Z88HezI8kpeXeu+rL710cP9+YhJp6lSYLLx9m8wVEvnJmw/82UfuDLdmZBR2RzhycwjY+vk+xaZaTz0gb6v0Nl0bMptdmtcikaO/Y6w8iuq5GwOKgLTIpk/biA9MvidlW20tvDQFGVtQ8ljM+iB86+sVGR+U+VsSI56uN+AFQPbA+SJNH9gRF7IX6Nrj9exijLDPvgd/sfCOIcdwXrTfy9hqF2zGvothvnrm6tVLpT09YPZaQVu1cXOG/xvl9u1f/PPbb79xLBIp+USn4YYjX3f9cF9dXS0vdbUQCEYiB7b/zn2rBgU3jKxEkwMHkiIe+sHGxTss95svj7+5fbbkkEj86FHYJG2Q7b4meKn3M6wUo0psivWwkoNtv4MltPZNdV53LeP1exGlWuyQu6GOqdwUAH3E7tnjfMfr/82ecg/RbU11VMOBuenyfNBENdaiwELpnpk4MNPXd/bsGZCrV6+e/sXVX8CvX549e3YikcC/bn+U6Tqw65OeyfajkZsu6R3sxAR+Dh67TeFT4BVRAGAKP7fRAxs9HFAKb72C6JtN8FopFvTAryYMeIIKRSBI3tsgyK22MW4kpcHHsLBVUcfXaBMOpdvrsFa2dhNCrPAxWGVtkMUPdW4ozNVVT475raNl9Nlsfj/j9nqRqTqqhvx7KonGYvd436nf43nHXk80ln0XaCz8UgRAp3m5S7Z4sHqPsPapvpkX+/r6JkTpw9ul8c7DA4kTn/ImB9sxE943SMX1uunJz8ez8ipsPsLPpnqmIchthC0w1jxY9Hct4IIlFQ1uJrgJgKwFqDzwUwu7AlgPHM+ysIuABfooANVV0qcCc2DRNmqr0d2gGiuANeE4UrCgOvhyIVjBIGurboC3AZtNsbgh+xRihLN1NhkD7joEy9ngdjsrnZ66ylq32+g37nF/YAewjPbfOI1dv2F27XF2NbgrmabKeqPXW+92lgNYdYw7sGAzvPS9eOwIaK2BRB8noKoSA+S/3X5g9NOeDcaIFC1XJPx5OezVOJgwqKihvJz9Y2Ek62CEebC83G9goJIQUFdNtzU1wMHoE0H8pHCzuAvIEMBSeIU8HgWLtlFLt/tgMDOChS3RuuC4hsUP2ScUOyoed10lU09cZltdnc1f52WMmL72sH57OeNxBwJOI7js7zBd7+zp8ni99krQbzav17+nHsNIhq1cdHPTOxj7iwPTBwaArZkEPj8LoEoMlHz9RNz+8fIYGcQWjwwRdXXs80pbuUkqrSkZLI+CGr9ksNAswPDjbx4sQgKCRewfIQRI4MFia0XrKgWLodsXAMtNgP0dgTWPuFOHxr6xJPmxXR8/1Yr0TEzbjTMD0zsGjvcdeTExgPfhM8yONE8I/WRyxPSY62a6LPvvSGoVlfXuJhhNKVjBane9G1RZEljVARqucWB5kICgTwoWUWpQVgALjvJx1lUKFm5vqpaYQjQ/AlgMNYVc2c8frN+W7AC6pl+0M0dnjjA7/s/XGeboZwYVke2Rc5/nnYMKzCT4gQgOChQ38bjrFG63otbfADv8ijqP26PwgqPO8GDBkZW1oGuQhEoOrIDC48E8haKhMgBa0NfktgV9tMpahcfGt0G2N0Bp8HjBD2MVPgjrFUGoLshgk5VIUxPWVcuB1fT5XaBUWfTfll+M7ILgb9cEvJnuoje/fpayPf45zt64fcRU+eoYfOOnA+j3kXDb5wEKFHUBP6a1wOWBDz7oqg9cCU8Aw3FFNTBW78Oi4GP5bMTGoZ/tr1YEar0QrCt4t7vO1wQNcG3g9gDLsJsU1ay3llheICio8NXVIs+AINYVIAeTt3Xez+nyzJWPMUG46Co/8xqXZEmWZEmWZEl+b4TMUJBXcC3of/KPQbed5T+ypCCLG+nn5IeLLMmSpEhtsNofbNjkrav2BANBn0exqa4JgqwGfwPmusEJ9gZtCk+1r56pDWzyNG2qdisgggLHWWHb5F+4+t+tuJuCAT6MZRvEab56n+RLMCf5IxG2Fv1/r6926UvzaaXWBzxBnL4p2FBXGwz4q33egCcY3ORVsDhG1e5KRXXQU90AReEF4nGIyRUshF7V1YovGlhuhc8bVHBMsAExU+KXTFvXK5jMEmyoVbBehTfY8Fvp4O+T1AZsLKgf1EL+QEOdt8HjA43lh384Acco6v2osYI499nkZYKwEUt7fcwXUGP5NoEBr7Uxlb4GP4JVWetp8Pgb6nDiEF4ZT0ODF5RwE+zDj7DXzzY1SJbM4PyPm/F4+DUTS/LJxQ3fa5uHZerZStZdWWlzs/VuWyV8ZP1oM+A37LHBDlKU9digtA2nnyrZ+i/aY9e45Qr1ijr4lrAKtwfXKcDXpN6vCPgVdSzmNW0BKFXdAJqZCSrqbNUBv0TxehRButgr+P9jPn1JPqlwYAVAcfkaCFh0BsaPprA2yLBenwJMO1MJigk2BTF5XucJYurV40OXzMNNZAfTrC9cksWLzWaD4M7G4nI1NwZ6LL7Hj/AOI0E3SwvZSCESHNrIIyxxExgN8vmLIxhu2EAnIVi+ZLBYpnaTTeF1K9x+Eaw62O31eHDm3+PDlD7O/yi8uPJmST6NKJq8DQ0QAlYHvQ0+cEPAMfeibfA1eGsbmmq9AR9c6DoIDMEFQ2uC32gFU+3zVMMm8JQ3+RX1X6TvNjrvimrAQzCFAlhNZDqxvg41lpdRNHiqm5jqOrwE9dJ1yViBrVbhCwTQo1ySTyjVm/y+oK/ai7EQ4/MEGxqAmQYbXFdvXVMwiIEh+uweXDvpVzTYGAgXgzZfkKmrgy82xIje4Bfry+1uasBEAXXefbbKAJnPa6p3B/yb0Fvf5AlUMoEGcN7JRyDK1rRJCpDN1wAFUMjeJflkoqj1NgQArAYWvFUFu6m22usN1nkU7mrQWH5Apwm/zT6vjWisOtBYgUCwblPQW1fLgMYKBP2+2uDCzSzJ75vY3OhkEX8J3Sl4g08AJx4VvgUfi9yLgI4U7MOg0Ia3D5Aj4JebfP68T2JJlmRJfj/k/wJwNi9jNYrCEAAAAABJRU5ErkJggg==" />
        </header>

      <br />

      <br />
      <br />
      
      <br />
      <br />
      <div className="indent">
        <form className="form">
          <input
            type="text"
            value={loginEmail}
            onChange={(e) => {
              if (e.target.value !== "") {
                setEmailError(false);
              } else if (e.target.value == "") {
                setEmailError(true);
                setEmailErrorMsg("Please Enter Your mail Id");
              }
              setLoginEmail(e.target.value);
            }}
            placeholder="Email or Phone"
            className="input"
            style={{ border: emailError ? "2.0px solid red" : "none" }}
          />
          <br />
          {emailError && <span style={{ color: "red" }}>{emailErrorMsg}</span>}
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={loginPassword}
            onChange={(e) => {
              if (e.target.value !== "") {
                setPasswordError(false);
              } else if (e.target.value == "") {
                setPasswordError(true);
                setPasswordErrorMsg("Please Enter Your Password");
              }
              setLoginPassword(e.target.value);
            }}
            style={{ border: passwordError ? "2.0px solid red" : "none" }}
          />
          <br />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordErrorMsg}</span>
          )}
          <br />
          <br />
          {/* <input
            type="text"
            placeholder="Admin or Student"
            className="input"
            value={role}
            onChange={(e) => {
              if (e.target.value !== "") {
                setRoleError(false);
              } else if (e.target.value == "") {
                setRoleError(true);
                setRoleErrorMsg("Please Enter Admin or Student");
              }
              setRole(e.target.value);
            }}
            style={{ border: roleError ? "2.0px solid red" : "none" }}
          />
          <br />
          {roleError && (
            <span style={{ color: "red" }}>{roleErrorMsg}</span>
          )}
          <br /> */}
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-outline-light text-blue"
            onClick={getLogin}
          >
            LOGIN
          </button>
          {loginMsg}
          <br />
          <br />
          <br />
            
          <a
            href="/resetpassword"
            style={{
              textAlign: "justify",
              color: "blue",
            }}
            className="text-blue"
          >
            Forget Password?
          </a>
          <br />
          <br />
          <br />
        
          <br />
          <br />
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
