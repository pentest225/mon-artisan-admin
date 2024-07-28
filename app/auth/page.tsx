import AppLogo from "../ui/app-logo";

export default function Page() {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Register */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <AppLogo />
              </div>
              {/* /Logo */}
              <h4 className="mb-2">Welcome to Sneat! 👋</h4>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>
              <form
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autoFocus={false}
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="············"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide" />
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="text-center">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
          {/* /Register */}
        </div>
      </div>
    </div>
  );
}
