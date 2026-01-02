export default function Login() {
  return (
    <main className="page-header">
      <header>
        <h1 className="page-header__title">Login</h1>
      </header>

      {/* Placeholder Form */}
      <form className="login">
        <label>
          Email{" "}
          <input type="email" placeholder="Enter Email" id="login-email" />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            id="login-password"
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
