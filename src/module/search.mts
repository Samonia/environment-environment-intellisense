type Animal = 'bird' | 'cat' | 'dog';

export default function search(
  name: Animal,
  nameList: Animal[] = ['dog', 'cat', 'bird'],
): boolean {
  return nameList.includes(name);
}
