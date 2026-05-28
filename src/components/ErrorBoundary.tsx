import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="cyber-shell min-h-screen flex flex-col items-center justify-center bg-[var(--bg-deep)] px-6 text-center">
          <pre
            className="ascii-banner ascii-blue font-mono text-[clamp(0.32rem,1.75vw,0.5rem)] leading-none"
            aria-hidden
          >
{`  ╻ ╻┏━┓┏━┓╻ ╻┏━┓┏━┓╻┏━┓┏━┓╻ ╻
  ┃ ┃┣┳┛┣━┫┃┏┛┣━┫┗━┓┃┣━┫┗━┓┗┳┛
  ┗━┛╹┗╸╹ ╹┗┛ ╹ ╹┗━┛╹╹ ╹┗━┛ ╹ `}
          </pre>
          <h1 className="mt-8 font-mono text-2xl font-semibold text-[var(--text-primary)]">
            Something went wrong
          </h1>
          <p className="mt-4 max-w-lg font-mono text-sm text-[var(--text-secondary)]">
            {this.state.error.message}
          </p>
          <button
            type="button"
            className="mt-8 rounded-lg border border-[var(--accent)] bg-[var(--accent)]/10 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/22"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
