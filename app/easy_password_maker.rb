require 'date'
require 'json'
require 'securerandom'

class EasyPasswordMaker

  # パスワード用の文字列を作ります。
  # @param [integer] nums 生成する文字数。
  # @param [boolean] is_lower 全てを小文字にする。デフォルトはfalse
  def self.make(nums, is_lower = false)
    pass = SecureRandom.alphanumeric(nums)
    is_lower ? pass.downcase : pass
  end


end