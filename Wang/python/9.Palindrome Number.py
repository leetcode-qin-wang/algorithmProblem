# -*-coding:utf8-*-
__author__ = 'Abbott'

"""
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
"""


class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x == 0:
      return True
    if str(x)[::-1] == str(x):
      return True
    else:
      return False