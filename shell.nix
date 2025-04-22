{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # code-cursor
    tailwindcss-language-server
    typescript-language-server
    vscode-langservers-extracted
    nodePackages.prettier
    vtsls

    nodejs_22
    pnpm
  ];
}
