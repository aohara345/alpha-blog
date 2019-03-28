class User < ActiveRecord::Base
  validates :username, presence: true,
                      uniqueness: { case_senstive: false },
                      length: { minimum: 3, maximum: 25 }
  VALID_EMAIL_REGEX = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates :email, presence: true,
                    uniqueness: { case_senstive: false },
                    format: { with: VALID_EMAIL_REGEX }
end
