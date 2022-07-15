export const paths = {
  src: {
    styles: {
      scssDir: `source/`,
      scssFiles: [`source/**/*.scss`],
      scssPages: [`source/**/pages/**/*.page.scss`],
      scssLayers: [
        `source/modules/structure/pages/**/*.page.layer.scss`,
        `source/modules/structure/templates/**/*.template.layer.scss`,
        `source/modules/structure/grid/**/*.grid.layer.scss`
      ],
      scssComponents: [
        `source/**/components/**/*.atom.scss`,
        `source/**/components/**/*.molecule.scss`,
        `source/**/components/**/*.organism.scss`,
        `source/**/templates/**/*.template.scss`,
        `source/**/templates/**/*.page.scss`,
      ],
    }
  },
  dist: {
    dir: `./dist`,
  },
};
