type ClassesObjCondition = boolean | string;
export type ClassesObj = { [className: string]: ClassesObjCondition };

const classnames = (baseClasses = '', classesObj: ClassesObj = {}): string => {
  let classes: string = baseClasses;

  Object.entries(classesObj).forEach(
    ([className, classCondition]: [string, ClassesObjCondition]) =>
      classCondition && (classes += ` ${className}`),
  );

  return classes;
};

export default classnames;
