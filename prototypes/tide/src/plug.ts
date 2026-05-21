// A plug driver is the ONLY thing that touches hardware. The optimizer decides;
// the driver actuates. Swap MockPlugDriver for KasaPlugDriver (plug-kasa.ts) to go real.

export interface PlugDriver {
  readonly name: string;
  on(): Promise<void>;
  off(): Promise<void>;
  isOn(): Promise<boolean>; // read-back: lets the loop VERIFY the switch happened
}

export class MockPlugDriver implements PlugDriver {
  readonly name: string;
  private state = false;

  constructor(name = "mock-plug") {
    this.name = name;
  }

  async on(): Promise<void> {
    this.state = true;
  }

  async off(): Promise<void> {
    this.state = false;
  }

  async isOn(): Promise<boolean> {
    return this.state;
  }
}
